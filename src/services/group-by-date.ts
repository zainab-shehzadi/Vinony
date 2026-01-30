// Convert date into this format (DD/MM/YYYY -> YYYY-MM-DD)
const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date(0);
  const datePart = dateStr.includes(" ") ? dateStr.split(" ")[0] : dateStr;
  const [day, month, year] = datePart.split("/");

  return new Date(Number(year), Number(month) - 1, Number(day));
};

// group data into today and 7 days older
export const groupDataByDate = (allGroups: any[]) => {
  const allPrompts = allGroups.flatMap((g) => g.prompts);

  const now = new Date();
  // Aaj ki date (00:00:00 time ke sath)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const groups = {
    today: [] as any[],
    yesterday: [] as any[],
    previous: [] as any[],
  };

  allPrompts.forEach((p) => {
    // ✅ Ab hum apna parseDate use karenge
    const pDate = parseDate(p.date); 
    
    // Sirf date comparison ke liye time reset karein
    const pDateOnly = new Date(
      pDate.getFullYear(),
      pDate.getMonth(),
      pDate.getDate(),
    ).getTime();

    if (pDateOnly === today.getTime()) {
      groups.today.push(p);
    } else if (pDateOnly === yesterday.getTime()) {
      groups.yesterday.push(p);
    } else if (pDateOnly < yesterday.getTime()) {
      groups.previous.push(p);
    }
  });

  // console.log("Groups Processed:", {
  //   today: groups.today.length,
  //   yesterday: groups.yesterday.length,
  //   previous: groups.previous.length
  // });

  return [
    { id: "today", label: "Today", prompts: groups.today },
    { id: "yesterday", label: "Yesterday", prompts: groups.yesterday },
    { id: "previous", label: "Previous 7 Days", prompts: groups.previous },
  ].filter((group) => group.prompts.length > 0);
};
