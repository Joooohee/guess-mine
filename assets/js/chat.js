export function handleMessageNotifi(data) {
  const { message, nickname } = data;
  console.log(`${nickname} said ${message}`);
}
