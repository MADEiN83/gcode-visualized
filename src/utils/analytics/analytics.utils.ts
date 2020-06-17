const w = window as any;
const { REACT_APP_NODE_ENV } = process.env;

export const track = (
  category: string = "",
  action: string = "",
  label: string = ""
): void => {
  if (REACT_APP_NODE_ENV !== "production") {
    return;
  }

  w.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: "",
  });
};
