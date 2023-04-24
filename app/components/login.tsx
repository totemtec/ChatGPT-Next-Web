import { memo, useState, useRef, useEffect, useLayoutEffect } from "react";
import Locale from "../locales";
import styles from "./login.module.scss";
import CloseIcon from "../icons/close.svg";
import {
    Message,
    useTokenStore,
} from "../store";
import { createRoot } from "react-dom/client";
import { IconButton } from "./button";
import SendWhiteIcon from "../icons/send-white.svg";



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
                    <div className={styles["field-label"]}>
                        手机号码
                    </div>
                
                    <div className={styles["password-input-container"]}>
                        <input type="text" className={styles["password-input"]} />
                    </div>

                    <div style={ {width: '80px' }}></div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["field-label"]}>
                        验证码
                    </div>
                
                    <div className={styles["verify-code-input-container"]}>
                        <input type="text" className={styles[".verify-code-input"]} />
                    </div>

                    <div style={ {width: '80px' }}>发送验证码</div>
                </div>
            </div>

            <div className={styles["modal-footer"]}>
            <IconButton
            icon={<SendWhiteIcon />}
            text="登录"
            className={styles["chat-input-send"]}
            noDark />
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