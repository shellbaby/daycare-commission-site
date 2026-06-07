export default function Page() {
    const galleryImgs: { src: string; alt: string }[] = [
        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_0.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_1.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_2.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_3.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_4.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_5.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_6.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_7.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_8.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/gallery/2026/gallery_9.webp",
            alt: "",
        },
    ]

    return (
        <>
            <div
                style={{
                    columnCount: 4,
                    columnGap: 0,
                }}
            >
                {galleryImgs.map((img) => (
                    <img src={img.src} alt={img.alt} className="p-1" />
                ))}
            </div>
        </>
    )
}
