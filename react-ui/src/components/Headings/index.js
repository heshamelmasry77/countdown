import React from "react";
// eslint-disable-next-line
import "./styles/Headings.css";
import { I18n } from "react-i18next";

const Headings = ({ deadline }) => {
  return (
    <I18n ns="translations">
      {
        (t) => (
          <div className="Headings">
            <h2>{t("headings.h2")}</h2>
            <h3>
              {t("headings.h3")} {deadline}
            </h3>
          </div>
        )
      }
    </I18n>
  );
};

export default Headings;