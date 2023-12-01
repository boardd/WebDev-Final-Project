const directors = [
    { name: "Susan Baida", image: "media/board/image_0.png", description: "Susan is Director for UPMC's Center for Engagement and Inclusion where she positively impacts diverse and underrepresented communities. She serves on the board of the Women's Center & Shelter of Pittsburgh and Casa San Jose, a nonprofit serving the Latino immigrant community in Pittsburgh." },
    { name: "Rachel Brecht", image: "media/board/image_1.png", description: "Rachel leads the Talent & Organizational Development function for TIER1 Performance. Her background is a blend of strategic consulting & corporate leadership, centered in Talent, Communication, Change Management, Learning, Culture, and Operations. In addition to the Pittsburgh Women's Alliance, she serves on the board of the Greater Pittsburgh Community Food Bank and the St. Clair Hospital Foundation." },
    { name: "Jayme Butcher Treasurer", image: "media/board/image_2.png", description: "Jayme is a Litigation Partner for Blank Rome where she helps clients with a wide variety of matters. She is a founding member of Pittsburgh's “Alley to the Valley” and serves on the board of Allegheny County Bar Association's Women in the Law Division." },
    { name: "Laura Freedman President", image: "media/board/image_3.png", description: "Laura is a financial and investment advisor at UBS Financial Services specializing in executive financial planning and asset management. She co-founded PWA and serves on the board of St. Clair Hospital and is former Board Chair of Strong Women Strong Girls." },
    { name: "Stephanie Herring", image: "media/board/image_4.png", description: "Stephanie is the Vice President of Human Resources for Dollar Bank and an experienced, adaptable, skilled HR leader with a practical understanding of organizational strategies who translates business vision into HR initiatives to improve performance, profitability, growth and employee engagement." },
    { name: "Cooper Munroe", image: "media/board/image_5.png", description: "Cooper, CEO of The Motherhood Inc., is an award-winning influencer marketing expert with over 30 years experience in public relations and marketing for the world's leading agencies, consumer brands and non-profits." },
    { name: "Hanifa Nakiryowa", image: "media/board/image_6.png", description: "Hanifa is originally from Uganda and is an active member of the Pittsburgh community. She is a passionate advocate for women's and children’s rights and represents women’s voices on different platforms both locally and internationally. She is a TEDx speaker and uses her experience surviving a brutal acid attack in Uganda to raise awareness of the systemic human rights violations that affect women and children." },
    { name: "Danielle Parson", image: "media/board/image_7.png", description: "Danielle is the Senior Director of Community Affairs at Propel Schools and a communications professional with a wide range of experience, including public relations, marketing, event planning, print and broadcast journalism. She takes great interest in her community and believes that education is the key to success. In 2016, Danielle founded Professional Women’s Network to engage and inspire women in the Pittsburgh region." },
    { name: "Sabrina Saunders", image: "media/board/image_8.png", description: "A seasoned executive, Ms. Mosby currently serves as President and Chief Executive Officer for Vibrant Pittsburgh, a premier economic development membership organization and the region's central resource, spokesperson, and convener on workforce diversity and inclusion." },
    { name: "Janel Skelley", image: "media/board/image_9.png", description: "Janel joined the Allegheny Conference on Community Development in 2005 and is the Conference’s chief financial officer. She oversees the financial operations of the organization. She also oversees all of the human resource, information technologies and administrative operations of the Conference including facilities management and space planning." },
];

function createDirectorCard(director) {
    return `
        <div class="col-md-4 director-card">
            <img src="${director.image}" alt="${director.name}" class="director-photo">
            <div class="card-body">
                <h3 class="director-title">${director.name}</h3>
                <p class="director-description">${director.description}</p>
            </div>
        </div>
    `;
}


$(document).ready(function() {
    let htmlContent = '';
    directors.forEach(director => {
        htmlContent += createDirectorCard(director);
    });
    $('#directorsRow').html(htmlContent);
});
