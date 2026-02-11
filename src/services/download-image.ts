
export const downloadImage = async (imageSrc, format, setOpenDropdown) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      
      // Filename setting
      const timeStamp = Date.now();
      link.setAttribute("download", `generated-${timeStamp}.${format}`);
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      window.URL.revokeObjectURL(url);
      setOpenDropdown(null);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };