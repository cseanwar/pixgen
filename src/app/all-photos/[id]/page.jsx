
const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('/data.json', { cache: 'no-store' });
    const photos = await res.json()

    const photo = photos.find(p => p.id == id)

   

    return (
        <div>
         <h1>{photo?.title}</h1>
         <p>{photo.prompt}</p>
        </div>
    );
};

export default PhotoDetailsPage;