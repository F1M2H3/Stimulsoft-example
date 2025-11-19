import { useEffect } from "react";
import { Stimulsoft as ReportDashboard } from "stimulsoft-dashboards-js/Scripts/stimulsoft.viewer";
import { setReportVariables } from "./utils";
import { LICENSE_KEY_REPORT } from "./constant/report";

export default function DashboardPage() {
  useEffect(() => {
    ReportDashboard.Base.StiLicense.key = LICENSE_KEY_REPORT;

    const report = ReportDashboard.Report.StiReport.createNewDashboard();
    report.loadFile("dashboard/Report.mrt");

    setReportVariables(report, {
      OrganizationId: 274,
      SiteId: 3803,
      Timezone: "US/Mountain",
      UserId: 0,
      URL: "https://reports-dev.mobohubb.com/",
    });

    const options = new ReportDashboard.Viewer.StiViewerOptions();
    options.appearance.theme =
      ReportDashboard.Viewer.StiViewerTheme.Office2022WhiteBlue;
    options.toolbar.showOpenButton = false;

    const viewer = new ReportDashboard.Viewer.StiViewer(
      options,
      "StiViewer",
      false
    );
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
}
