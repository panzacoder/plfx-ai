import { useRemarkSync } from "react-remark";

export function Markdown({ markdown }) {
  const reactContent = useRemarkSync(markdown);
  return (
    reactContent
  );
}
