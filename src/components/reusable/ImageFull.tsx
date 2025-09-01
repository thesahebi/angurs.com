
interface ImageFullProps {
  src: string; 
  className?: string; 
  alt?: string;
}


const ImageFull: React.FC<ImageFullProps> =  ({ src='', className='', alt='' }) => {
  return (
    <>
      <img className={` img-fluid ${className}`}src={src} alt={alt ?? ""} />
    </>
  );
};

export default ImageFull;
