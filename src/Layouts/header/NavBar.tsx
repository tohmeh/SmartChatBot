import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const route = e.target.value;
    if (route) navigate(`/${route}`);
  };

  return (
    <div className="flex-shrink-0 w-full flex justify-between items-center p-4 bg-[#f8f4f1] border-b border-gray-200">
      <img
        src="/images/icons/NewChat.svg"
        alt="Sidebar Icon"
        className="h-5 w-5 sm:h-6 sm:w-6"
      />
      <div>
        <select
          defaultValue=""
          onChange={handleSelectChange}
          className="text-[#091C58] text-xs font-medium cursor-pointer py-1 w-fit sm:text-base"
        >
          <option value="" disabled className="hidden">
            Administration
          </option>
          <option value="ManageAssistant">Manage Assistant</option>
          <option value="KnowledgeBasePage">Knowledge Base</option>
        </select>
      </div>
    </div>
  );
}
