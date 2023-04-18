import React from "react";
import { FaDiscord, FaGithub, FaSlack, FaTwitter } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <Dialog header="Welcome to HopesoftGPT 🤖" isShown={show} close={close}>
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>HopesoftGPT</strong> 允许您配置和部署
自主人工智能代理。命名您的自定义AI并让它开始任何
可以想象的目标。它将试图通过思考来达到目标
要做的任务，执行它们，并从结果中学习 🚀
        </p>
        <div>
          <br />
          该平台目前处于测试阶段，我们目前正在开发:
          <ul className="ml-5 list-inside list-disc">
            <li>长期记忆 🧠</li>
            <li>网页浏览 🌐</li>
            <li>与网站和人员的互动 👨‍👩‍👦</li>
          </ul>
          <br />
          <p className="mt-2">关注动态:</p>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://discord.gg/ewYWt9DF", "_blank")
            }
          >
            <FaDiscord size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open(
                "https://join.slack.com/t/hopesoft-hq/shared_invite/zt-1t5rns5qt-b4O6Wf1~9UOTla~nSkxpUg",
                "_blank"
              )
            }
          >
            <FaSlack size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://github.com/adminlove520/HopesoftGPT", "_blank")
            }
          >
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
