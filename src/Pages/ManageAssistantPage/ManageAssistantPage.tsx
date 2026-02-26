export function ManageAssistantPage() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#f8f4f1] overflow-y-hidden">
      <div className="p-8 w-full max-w-3xl">
        <div className="flex flex-row justify-between items-center mb-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-[#091C58] hover:text-[#0a1d5a] transition duration-200 group mt-4"
          >
            <img 
              src="/images/icons/back.svg" 
              alt="Back" 
              className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-200" 
            />
            <span className="font-medium">Back</span>
          </button>

          <h1 className="text-2xl font-bold text-[#091C58]">
            Assistant Configuration
          </h1>
          
          <div className="w-[80px]"></div>
        </div>

        <div className="custom-scroll rounded-xl shadow-inner bg-[#ece7e3] border border-gray-300 p-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="assistantName"
              className="block text-sm font-medium text-[#091C58]"
            >
              Assistant Name
            </label>
            <input
              id="assistantName"
              type="text"
              placeholder="Enter assistant name"
              className="w-full border-b-2 border-gray-300 focus:border-[#091C58] focus:outline-none px-2 py-3 bg-transparent transition duration-200 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-[#091C58]"
            >
              Role
            </label>
            <input
              id="role"
              type="text"
              placeholder="Enter assistant role (e.g., Customer Support Agent, Data Analyst)"
              className="w-full border-b-2 border-gray-300 focus:border-[#091C58] focus:outline-none px-2 py-3 bg-transparent transition duration-200 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="instructions"
              className="block text-sm font-medium text-[#091C58]"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              placeholder="Enter detailed instructions for the assistant's behavior, capabilities, and guidelines"
              rows={8}
              className="w-full border-2 border-gray-300 focus:border-[#091C58] focus:outline-none px-3 py-3 bg-white rounded-lg transition duration-200 text-sm resize-none"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="button"
              className="px-8 py-3 w-full text-white font-medium text-sm hover:bg-[#0a1d5a] transition duration-200"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}