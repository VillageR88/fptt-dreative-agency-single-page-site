function handleClick() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
const title = 'Get Scootin';
export default function ButtonGetScootin({ additionalFunction }: { additionalFunction?: () => void }) {
  return (
    <button
      onClick={() => {
        handleClick();
        if (additionalFunction) {
          additionalFunction();
        }
      }}
      className="buttonType1"
      type="button"
    >
      {title}
    </button>
  );
}
