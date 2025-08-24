import { useState } from "react";
import { MdTranslate } from "react-icons/md";

import React from "react";

const Dropdown = () => {
  const [selectValue, setSelectValue] = useState("English");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="bg-[#171512] border-1 border-gray-400 text-white w-45 h-7 flex items-center rounded-sm" >
      <label htmlFor="dropdonw" className="px-2 text-white"><MdTranslate /></label>
      <div className="w-45">

      
      <select id="dropdown" value={selectValue} onChange={handleChange}>
        
        <option className="text-black" lang="en" label="English" value="en-IN">
          English
        </option>
        <option className="text-black" lang="es" label="Español" value="es-IN">
          Español
        </option>
        <option className="text-black" lang="pt" label="Português" value="pt-IN">
          Português
        </option>
        <option className="text-black" lang="fr" label="Français" value="fr-IN">
          Français
        </option>
        <option className="text-black" lang="sv" label="Svenska" value="sv-IN">
          Svenska
        </option>
        <option className="text-black" lang="nb" label="Norsk bokmål" value="nb-IN">
          Norsk bokmål
        </option>
        <option className="text-black" lang="fi" label="Suomi" value="fi-IN">
          Suomi
        </option>
        <option className="text-black" lang="da" label="Dansk" value="da-IN">
          Dansk
        </option>
        <option className="text-black" lang="nl" label="Nederlands" value="nl-IN">
          Nederlands
        </option>
        <option className="text-black" lang="de" label="Deutsch" value="de-IN">
          Deutsch
        </option>
        <option className="text-black" lang="ja" label="日本語" value="ja-IN">
          日本語
        </option>
        <option className="text-black" lang="it" label="Italiano" value="it-IN">
          Italiano
        </option>
        <option className="text-black" lang="zh" label="中文" value="zh-IN">
          中文
        </option>
        <option className="text-black" lang="ko" label="한국어" value="ko-IN">
          한국어
        </option>
        <option className="text-black" lang="ar" label="العربية" value="ar-IN">
          العربية
        </option>
        <option className="text-black" lang="pl" label="Polski" value="pl-IN">
          Polski
        </option>
        <option className="text-black" lang="tr" label="Türkçe" value="tr-IN">
          Türkçe
        </option>
        <option className="text-black" lang="th" label="ไทย" value="th-IN">
          ไทย
        </option>
        <option className="text-black" lang="ro" label="Română" value="ro-IN">
          Română
        </option>
        <option className="text-black" lang="he" label="עברית" value="he-IN">
          עברית
        </option>
        <option className="text-black" lang="el" label="Ελληνικά" value="el-IN">
          Ελληνικά
        </option>
        <option className="text-black" lang="id" label="Bahasa Indonesia" value="id-IN">
          Bahasa Indonesia
        </option>
        <option className="text-black" lang="hu" label="Magyar" value="hu-IN">
          Magyar
        </option>
        <option className="text-black" lang="cs" label="Čeština" value="cs-IN">
          Čeština
        </option>
        <option className="text-black" lang="vi" label="Tiếng Việt" value="vi-IN">
          Tiếng Việt
        </option>
        <option className="text-black" lang="hi" label="हिन्दी" value="hi-IN">
          हिन्दी
        </option>
        <option className="text-black" lang="ms" label="Melayu" value="ms-IN">
          Melayu
        </option>
        <option className="text-black" lang="ru" label="Русский" value="ru-IN">
          Русский
        </option>
        <option className="text-black" lang="hr" label="Hrvatski" value="hr-IN">
          Hrvatski
        </option>
        <option className="text-black" lang="uk" label="Українська" value="uk-IN">
          Українська
        </option>
        <option className="text-black" lang="fil" label="Filipino" value="fil-IN">
          Filipino
        </option>
       
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
