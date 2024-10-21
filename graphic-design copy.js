// Example data for graphic design projects
const projects = [
    {
        title: "Green Conceal",
        image: "images/greenconceal/gc_brochure.png", // Original image path
        hoverImage: "images/greenconceal/gc_brochureback.jpg", // Hover image path (same size)
        size: "medium-horizontal",  // Options: 'small', 'medium', 'large'
        
    },

    {
        title: "Dark Tales Magazine",
        image: "images/darktales/dt_visual.png", // Original image path
        hoverImage: "images/darktales/dt_visual_hover.png", // Hover image path (same size)
        size: "medium-vertical",
        
    },

  
    {
        title: "FloTeaing",
        image: "images/floteaing/ft_design.jpg", // Original image path
        hoverImage: "images/floteaing/ft_design_hover.jpg", // Hover image path (same size)
        size: "medium-vertical",
       
    },

    {
        title: "Degree Show Proposal",
        image: "images/degreeshow/ds_concept.png",
        hoverImage: "images/degreeshow/ds_concept_hover.png", // Hover image path (same size)
        size: "large"
       
    },
    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size); // Add size class
        
        // Create image element
        const img = document.createElement("img"); 
        img.src = project.image; // Original image
        img.alt = project.title;
        img.loading = "lazy"; // Add lazy loading

        const overlay = document.createElement("div");
        overlay.setAttribute("class","overlay");
        
        const overlayText = document.createElement("div");
        overlayText.setAttribute("class","text");

        overlayText.innerText=project.title;
         

        // Append image, title, and tags to the grid item
        gridItem.appendChild(img);
        overlay.appendChild(overlayText);
        gridItem.appendChild(overlay);

   



       
        
        // // Add hover event listener to change image on hover
        // gridItem.addEventListener("mouseover", () => {
        //     img.src = project.hoverImage; // Change to hover image
        // });

        // gridItem.addEventListener("mouseout", () => {
        //     img.src = project.image; // Revert to original image
        // });

        // Append grid item to the grid container
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
