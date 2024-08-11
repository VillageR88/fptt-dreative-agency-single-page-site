import imageSlide1 from '../../assets/desktop/image-slide-1.jpg';

export default function Block4() {
  return (
    <div className="flex h-[728px] w-full justify-between">
      <div>B1</div>
      <div className="relative h-[728px] w-[895px]">
        <image className="absolute h-[728px] w-[895px]" width={895} height={728} src={imageSlide1 as string} alt="" />
      </div>
    </div>
  );
}
