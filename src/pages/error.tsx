import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components-shared/button";

interface ErrorProps {
  error: unknown;
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation("translation", { keyPrefix: "error_page" });

  return (
    <main className="error-page-layout">
      <div>
        <div>
          <Button variant="outline" onClick={resetErrorBoundary}>
            {t("go_to_landing")}
          </Button>
        </div>
        <pre>{t("error_occured")}</pre>
        {error instanceof Error && <pre>{error.message}</pre>}
      </div>
    </main>
  );
};

export default ErrorPage;
