
import { useEffect } from "react";
import { Stimulsoft as Report } from "stimulsoft-reports-js/Scripts/stimulsoft.viewer";
import { setReportVariables } from "./utils";
import { LICENSE_KEY_REPORT } from "./constant/report";

export default function ReportPage(){
  useEffect(() => {
    Report.Base.StiLicense.key = LICENSE_KEY_REPORT;

    const report = new Report.Report.StiReport();
    report.loadFile("reports/Report.mrt");

    setReportVariables(report, {
      OrganizationId: 766,
      SiteId: 4409,
      Timezone: "America/Bogota",
      UserId: 0,
      URL: "https://reports-dev.mobohubb.com/",
    });

    const options = new Report.Viewer.StiViewerOptions();
    options.appearance.theme = Report.Viewer.StiViewerTheme.Office2007Silver;
    options.appearance.scrollbarsMode = true;
    options.toolbar.zoom = 100;
    options.height = "100vh";

    const viewer = new Report.Viewer.StiViewer(options, "StiViewer", false);
    viewer.options.toolbar.showOpenButton = false;
    viewer.report = report;

    viewer.renderHtml("viewerContent");
  }, []);

  return (
    <div
      id="viewerContent"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};
