import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const languageCodes = {
  en: "English",
  ka: "Georgian",
};

export const LanguageSelect = () => {
  const [langCode, setLangCode] = useState(() => {
    return localStorage.getItem("langCode") || "en";
  });
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("langCode", langCode);
  }, [i18n, langCode]);

  return (
    <FormControl
      sx={{
        minWidth: 120,
        m: 1,
      }}
    >
      <Select
        sx={{
          color: "green",
          border: "2px solid blue",
        }}
        value={langCode}
        onChange={(e) => {
          setLangCode(e.target.value);
          window.location.reload();
        }}
        defaultValue={langCode}
      >
        {Object.entries(languageCodes).map(([code, name]) => (
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
