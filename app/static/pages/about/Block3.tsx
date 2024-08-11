import imageChevron from '../../assets/icons/chevron.svg';
import { useRef, useState } from 'preact/hooks';

const items = {
  'How it works': [
    {
      title: 'How do I download the app?',
      description:
        'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
    },

    {
      title: 'Can I find a nearby Scoots?',
      description:
        "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
    },

    {
      title: 'Do I need a license to ride?',
      description:
        'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
    },
  ],

  'Safe driving': [
    {
      title: 'Should I wear a helmet?',
      description:
        'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
    },
    {
      title: 'How about the rules & regulations?',
      description:
        "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
    },
    {
      title: 'What if I damage my Scoot?',
      description:
        "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
    },
  ],
};

export default function Block3() {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const liRef = useRef<HTMLLIElement[]>([]);

  function handleItemClick(item: { title: string; description: string }): void {
    setVisibleItems((prevState) => ({
      ...prevState,
      [item.title]: !prevState[item.title],
    }));
  }

  return (
    <div className="mb-[120px] flex w-full max-w-[1110px] flex-col items-center gap-[48px] px-[32px] md:mb-[160px] md:gap-[64px] xl:px-0">
      <h2 className="text-[#495567]">FAQs</h2>
      <ul className="flex w-full flex-col justify-between gap-[64px]">
        {Object.entries(items).map(([key, value]) => (
          <li
            key={key}
            className="flex w-full flex-col items-center justify-between gap-[32px] md:gap-[64px] xl:flex-row xl:items-start"
          >
            <h3 className="text-[24px] font-bold leading-[28px] tracking-[-1.07px] text-[#495567] md:text-[40px] md:leading-[48px] md:tracking-[-1.79px]">
              {key}
            </h3>
            <ul className="flex w-full flex-col gap-[16px] xl:max-w-[730px]">
              {value.map((item) => (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <li
                  ref={(el) => {
                    if (el) {
                      liRef.current.push(el);
                    }
                  }}
                  onClick={() => {
                    handleItemClick(item);
                  }}
                  key={item.title}
                  className="flex flex-col bg-[#F2F5F9] px-[40px] py-[32px] transition-all hover:cursor-pointer hover:bg-[#FFF4DF]"
                >
                  <div className="flex w-full items-center justify-between gap-[16px]">
                    <h4 className="text-[#495567]">{item.title}</h4>
                    <img
                      className={`transition duration-300 ${visibleItems[item.title] ? '-scale-y-100' : ''}`}
                      src={imageChevron as string}
                      alt="chevron"
                    />
                  </div>
                  <p
                    className={`max-w-[650px] text-[rgb(73,85,103)] transition-all ${
                      visibleItems[item.title] ? 'visible-paragraph' : 'hidden-paragraph'
                    }`}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
