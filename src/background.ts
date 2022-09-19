import injectedContent from "url:./injected/render-content.tsx"

chrome.tabs.onActivated.addListener((activeInfo) => {
  const { tabId } = activeInfo

  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      if (
        !tabs?.[0]?.url?.includes("chrome://") &&
        tabs?.[0]?.status === "complete"
      ) {
        const arr = injectedContent.split("/")
        const res = arr[arr.length - 1]

        chrome.scripting.executeScript({
          target: { tabId: tabs[0]?.id as number },
          files: [res.split("?")[0]]
        })
      }
    }
  )
})
