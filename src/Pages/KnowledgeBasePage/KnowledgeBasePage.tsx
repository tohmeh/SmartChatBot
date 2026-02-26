type FileEntry = {
  id: number;
  fileName: string;
  title: string;
  url: string;
};

const files: FileEntry[] = [
  { id: 1, fileName: "report.pdf", title: "Monthly Report", url: "/files/report.pdf" },
  { id: 2, fileName: "data.xlsx", title: "Q2 Data", url: "/files/data.xlsx" },
  { id: 3, fileName: "presentation.pptx", title: "Team Presentation", url: "/files/presentation.pptx" },
  { id: 4, fileName: "budget.xlsx", title: "Annual Budget", url: "/files/budget.xlsx" },
  { id: 5, fileName: "summary.docx", title: "Meeting Summary", url: "/files/summary.docx" },
  { id: 6, fileName: "contract.pdf", title: "Client Contract", url: "/files/contract.pdf" },
  { id: 7, fileName: "logo.png", title: "Company Logo", url: "/files/logo.png" },
  { id: 8, fileName: "notes.txt", title: "Dev Notes", url: "/files/notes.txt" },
  { id: 9, fileName: "invoice-123.pdf", title: "Invoice March", url: "/files/invoice-123.pdf" },
  { id: 10, fileName: "agenda.docx", title: "Project Agenda", url: "/files/agenda.docx" },
  { id: 11, fileName: "wireframes.fig", title: "UI Wireframes", url: "/files/wireframes.fig" },
  { id: 12, fileName: "api-docs.json", title: "API Schema", url: "/files/api-docs.json" },
  { id: 13, fileName: "readme.md", title: "Documentation", url: "/files/readme.md" },
  { id: 14, fileName: "demo.mp4", title: "Product Demo", url: "/files/demo.mp4" },
  { id: 15, fileName: "deployment.yaml", title: "K8s Config", url: "/files/deployment.yaml" },
  { id: 16, fileName: "changelog.txt", title: "Version History", url: "/files/changelog.txt" },
  { id: 17, fileName: "user-guide.pdf", title: "User Guide", url: "/files/user-guide.pdf" },
  { id: 18, fileName: "backup.zip", title: "System Backup", url: "/files/backup.zip" },
  { id: 19, fileName: "survey-results.csv", title: "Survey Results", url: "/files/survey-results.csv" },
  { id: 20, fileName: "config.env", title: "Environment Config", url: "/files/config.env" },
];

export function KnowledgeBasePage() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#f8f4f1] overflow-y-hidden">
      <div className="p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-[#091C58] mb-4 text-center">
          Manage Assistant Knowledge base
        </h1>

        <div className="custom-scroll rounded-xl shadow-inner bg-[#ece7e3] border border-gray-300 h-[50%] overflow-y-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">File Name</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td className="px-4 py-2">{file.fileName}</td>
                  <td className="px-4 py-2">{file.title}</td>
                  <td className="px-4 py-2 text-center">
                    <img
                      src="/images/icons/Download-icon.svg"
                      alt="Download"
                      className="inline-block cursor-pointer w-5 mx-1"
                    />
                    <img
                      src="/images/icons/delete-2-svgrepo-com.svg"
                      alt="Delete"
                      className="inline-block cursor-pointer w-5 mx-1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between space-x-4 p-4 w-[96%]">
          <input
            type="text"
            placeholder="File Title"
            className="border-b-2 border-gray-300 focus:border-[#091C58] focus:outline-none px-2 py-1 transition duration-200"
          />
          <span id="fileName" className="text-gray-500" />

          <div className="flex items-center space-x-2">
            <input type="file" id="fileInput" className="hidden" />
            <label htmlFor="fileInput" className="cursor-pointer">
              <img src="/images/icons/Add-file.svg" className="w-5" alt="Add File" />
            </label>

            <button id="submitBtn" type="submit" className="hidden" />
            <img src="/images/icons/Upload-icon.svg" className="w-5 cursor-pointer" alt="Upload" />
          </div>
        </div>
      </div>
    </div>
  );
}
