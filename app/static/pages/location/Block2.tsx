import { Link } from 'preact-router';

const items = {
  linkTitle: 'Message Us',
  title: 'Your city not listed?',
  description:
    'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.',
};

export default function Block2() {
  return (
    <div className="flex min-h-[100px] w-full max-w-[573px] flex-col items-center justify-between gap-[40px] text-center xl:max-w-full xl:flex-row xl:text-start">
      <section className="flex max-w-[826px] flex-col items-center gap-[40px] xl:flex-row xl:gap-[30px]">
        <h2 className="w-full max-w-[457px] text-[#495567] xl:max-w-[351px]">{items.title}</h2>
        <p className="w-full text-[#939CAA] xl:max-w-[445px]">{items.description}</p>
      </section>
      <Link className="buttonType1" href="#">
        {items.linkTitle}
      </Link>
    </div>
  );
}
