"use client";

import styles from "./writePage.module.css";
import Image from "next/image";
import { useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const WritePage = () => {
    const [open, setOpen] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Tell your story...",
            }),
        ],
        content: "",
        immediatelyRender: false,
    });

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />

            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <Image src="/plus2.png" alt="" width={16} height={16} />
                </button>

                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image
                                src="/image.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src="/external.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src="/video.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                )}

                {/* TipTap Editor */}
                <EditorContent className={styles.textArea} editor={editor} />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
};

export default WritePage;
