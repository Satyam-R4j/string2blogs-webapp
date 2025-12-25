import connectDB from "./connect";
import User from "./models/User";
import Account from "./models/Account";
import Session from "./models/Session";
import VerificationToken from "./models/VerificationToken";

export function MongooseAdapter() {
  return {
    async createUser(user) {
      await connectDB();
      const newUser = await User.create({
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
      });
      return {
        id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
        emailVerified: newUser.emailVerified,
        image: newUser.image,
      };
    },
    async getUser(id) {
      await connectDB();
      const user = await User.findById(id);
      if (!user) return null;
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
      };
    },
    async getUserByEmail(email) {
      await connectDB();
      const user = await User.findOne({ email });
      if (!user) return null;
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
      };
    },
    async getUserByAccount({ providerAccountId, provider }) {
      await connectDB();
      const account = await Account.findOne({
        provider,
        providerAccountId,
      });
      if (!account) return null;
      const user = await User.findById(account.userId);
      if (!user) return null;
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
      };
    },
    async updateUser(user) {
      await connectDB();
      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        {
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
        },
        { new: true }
      );
      if (!updatedUser) return null;
      return {
        id: updatedUser._id.toString(),
        name: updatedUser.name,
        email: updatedUser.email,
        emailVerified: updatedUser.emailVerified,
        image: updatedUser.image,
      };
    },
    async deleteUser(userId) {
      await connectDB();
      await User.findByIdAndDelete(userId);
      await Account.deleteMany({ userId });
      await Session.deleteMany({ userId });
    },
    async linkAccount(account) {
      await connectDB();
      const newAccount = await Account.create({
        userId: account.userId,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
        session_state: account.session_state,
      });
      return {
        id: newAccount._id.toString(),
        userId: newAccount.userId,
        type: newAccount.type,
        provider: newAccount.provider,
        providerAccountId: newAccount.providerAccountId,
        refresh_token: newAccount.refresh_token,
        access_token: newAccount.access_token,
        expires_at: newAccount.expires_at,
        token_type: newAccount.token_type,
        scope: newAccount.scope,
        id_token: newAccount.id_token,
        session_state: newAccount.session_state,
      };
    },
    async unlinkAccount({ providerAccountId, provider }) {
      await connectDB();
      await Account.deleteOne({ provider, providerAccountId });
    },
    async createSession(session) {
      await connectDB();
      const newSession = await Session.create({
        sessionToken: session.sessionToken,
        userId: session.userId,
        expires: session.expires,
      });
      return {
        id: newSession._id.toString(),
        sessionToken: newSession.sessionToken,
        userId: newSession.userId,
        expires: newSession.expires,
      };
    },
    async getSessionAndUser(sessionToken) {
      await connectDB();
      const session = await Session.findOne({ sessionToken });
      if (!session) return null;
      const user = await User.findById(session.userId);
      if (!user) return null;
      return {
        session: {
          id: session._id.toString(),
          sessionToken: session.sessionToken,
          userId: session.userId,
          expires: session.expires,
        },
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
        },
      };
    },
    async updateSession(session) {
      await connectDB();
      const updatedSession = await Session.findOneAndUpdate(
        { sessionToken: session.sessionToken },
        {
          userId: session.userId,
          expires: session.expires,
        },
        { new: true }
      );
      if (!updatedSession) return null;
      return {
        id: updatedSession._id.toString(),
        sessionToken: updatedSession.sessionToken,
        userId: updatedSession.userId,
        expires: updatedSession.expires,
      };
    },
    async deleteSession(sessionToken) {
      await connectDB();
      await Session.deleteOne({ sessionToken });
    },
    async createVerificationToken(verificationToken) {
      await connectDB();
      const newToken = await VerificationToken.create({
        _id: verificationToken.identifier,
        token: verificationToken.token,
        expires: verificationToken.expires,
      });
      return {
        identifier: newToken._id.toString(),
        token: newToken.token,
        expires: newToken.expires,
      };
    },
    async useVerificationToken({ identifier, token }) {
      await connectDB();
      const verificationToken = await VerificationToken.findOneAndDelete({
        _id: identifier,
        token,
      });
      if (!verificationToken) return null;
      return {
        identifier: verificationToken._id.toString(),
        token: verificationToken.token,
        expires: verificationToken.expires,
      };
    },
  };
}

