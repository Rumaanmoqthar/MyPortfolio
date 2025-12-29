const Certificates = () => {
    const certificates = [
        {
            title: "Cyber Security",
            file: "/images/Cyber Security.jpg",
        },
        {
            title: "Google Analytics",
            file: "/images/G anlatics.jpg",
        },
        {
            title: "Java Programming",
            file: "/images/JavaProgramming.jpg",
        },
        {
            title: "React JS Course",
            file: "/images/ReactJs Course.jpg",
        },
        {
            title: "React JS Live Project",
            file: "/images/ReactJs live Project Completion.jpg",
        }
    ];

    return (
        <section className="project" id="certificates">
            <div className="title-project">
                <h4>CERTIFICATES</h4>
                <p>My verified certifications and achievements.</p>
            </div>
            <div className="projects-container">
                {certificates.map((cert, index) => (
                    <div className="project-card" key={index} onClick={() => window.open(cert.file, '_blank')} style={{ cursor: 'pointer' }}>
                        <div style={{ padding: '0', height: '220px', width: '100%', overflow: 'hidden' }}>
                            <img src={cert.file} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3>{cert.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
