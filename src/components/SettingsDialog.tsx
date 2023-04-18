import React from "react";
import Button from "./Button";
import {
  FaKey,
  FaMicrochip,
  FaThermometerFull,
  FaExclamationCircle,
} from "react-icons/fa";
import Dialog from "./Dialog";
import Input from "./Input";
import { GPT_MODEL_NAMES, GPT_4 } from "../utils/constants";
import Accordion from "./Accordion";

export default function SettingsDialog({
  show,
  close,
  customApiKey,
  setCustomApiKey,
  customModelName,
  setCustomModelName,
  customTemperature,
  setCustomTemperature,
}: {
  show: boolean;
  close: () => void;
  customApiKey: string;
  setCustomApiKey: (key: string) => void;
  customModelName: string;
  setCustomModelName: (key: string) => void;
  customTemperature: number;
  setCustomTemperature: (temperature: number) => void;
}) {
  const [key, setKey] = React.useState<string>(customApiKey);

  const handleClose = () => {
    setKey(customApiKey);
    close();
  };

  const handleSave = () => {
    setCustomApiKey(key);
    close();
  };

  const advancedSettings = (
    <Input
      left={
        <>
          <FaThermometerFull />
          <span className="ml-2">Temp: </span>
        </>
      }
      value={customTemperature}
      onChange={(e) => setCustomTemperature(parseFloat(e.target.value))}
      type="range"
      toolTipProperties={{
        message: "Higher temperature will make output more random",
        disabled: false,
      }}
      attributes={{
        min: 0,
        max: 1,
        step: 0.01,
      }}
    />
  );

  return (
    <Dialog
      header="设置 ⚙"
      isShown={show}
      close={handleClose}
      footerButton={<Button onClick={handleSave}>Save</Button>}
    >
      <p>
      在这里，您可以添加您的OpenAI API密钥。这将需要您支付
您自己的OpenAI使用，但为您提供更大的AgentGPT访问权限！你可以
另外选择OpenAI提供的任何模型.
      </p>
      <br />
      <p
        className={
          customModelName === GPT_4
            ? "rounded-md border-[2px] border-white/10 bg-yellow-300 text-black"
            : ""
        }
      >
        <FaExclamationCircle className="inline-block" />
        &nbsp;
        <b>
        如果要使用GPT-4的模型，你需要提供支持GPT-4的账号下的秘钥&nbsp;
          <a
            href="https://openai.com/waitlist/gpt-4-api"
            className="text-blue-500"
          >
            点此申请
          </a>
          . (否则将不起作用)
        </b>
      </p>
      <br />
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <Input
          left={
            <>
              <FaMicrochip />
              <span className="ml-2">模型:</span>
            </>
          }
          type="combobox"
          value={customModelName}
          onChange={() => null}
          setValue={setCustomModelName}
          attributes={{ options: GPT_MODEL_NAMES }}
        />
        <br className="hidden md:inline" />
        <Input
          left={
            <>
              <FaKey />
              <span className="ml-2">秘钥: </span>
            </>
          }
          placeholder={"sk-..."}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <br className="md:inline" />
        <Accordion
          child={advancedSettings}
          name="高级设置"
        ></Accordion>
        <br />
        <strong className="mt-10">
        注意：要获得密钥，请注册OpenAI帐户并访问下列的{" "}
          <a
            href="https://platform.openai.com/account/api-keys"
            className="text-blue-500"
          >
            link.
          </a>{" "}
          此密钥仅在当前浏览器会话中使用
        </strong>
      </div>
    </Dialog>
  );
}
