import { memo, useState, useRef, useEffect, useLayoutEffect } from "react";
import Locale from "../locales";
import styles from "./login.module.scss";
import CloseIcon from "../icons/close.svg";
import {
    Message,
    useTokenStore,
} from "../store";
import { createRoot } from "react-dom/client";




interface ModalProps {
    title: string;
    children?: JSX.Element;
    actions?: JSX.Element[];
    onClose?: () => void;
}
export function Modal(props: ModalProps) {
    return (
        <div className={styles["modal-container"]}>
            <div className={styles["modal-header"]}>
                <div className={styles["modal-title"]}>{props.title}</div>
            </div>


            <div className={styles["modal-content"]}>
                <div className={styles["list-item"]}>
                    <button className={styles["mobile-area"]}>
                        中国 +86
                    </button>
                    <div className={styles["password-input-container"]}>
                        <input type="text" className={styles["password-input"]} />
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["password-input-container"]}>
                        <input type="text" className={styles["password-input"]} />
                    </div>
                    <button className={styles["mobile-area"]}>
                        发送验证码
                    </button>

                </div>
            </div>

            <div className={styles["modal-footer"]}>
                <div className={styles["modal-actions"]}>

                    <div className={styles["modal-action"]}>
                        登录
                    </div>
                </div>
            </div>
        </div>
    );
}

export function showLoginModal() {
    const div = document.createElement("div");
    div.className = "modal-mask";
    document.body.appendChild(div);

    const root = createRoot(div);
    const closeModal = () => {
        root.unmount();
        div.remove();
    };

    const title = "手机验证码登录";

    root.render(<Modal title={title} onClose={closeModal}></Modal>);
}