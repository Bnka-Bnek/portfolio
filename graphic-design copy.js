// Example data for graphic design projects
const projects = [
    {
        title: "Green Conceal",
        image: "images/greenconceal/gc_brochure.png", // Original image path
        hoverImage: "images/greenconceal/gc_brochureback.jpg", // Hover image path (same size)
        
    },

    {
        title: "Dark Tales Magazine",
        image: "images/darktales/dt_visual.png", // Original image path
        hoverImage: "images/darktales/dt_visual_hover.png", // Hover image path (same size)
    },

  
    {
        title: "FloTeaing",
        image: "images/floteaing/ft_design.jpg", // Original image path
        hoverImage: "images/floteaing/ft_design_hover.jpg", // Hover image path (same size)
    },

    {
        title: "Degree Show Proposal",
        image: "images/degreeshow/ds_concept.png",
        hoverImage: "images/degreeshow/ds_concept_hover.png", // Hover image path (same size)
    },
    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 
	const windowWidth = window.innerWidth;

	gridContainer.innerHTML = "";

	let columnWidth = Math.max(350, Math.min(600, windowWidth / 2)); // Minimum 400px, max 600px
    let numberOfColumns = Math.max(2, Math.floor(windowWidth / columnWidth)); // At least 2 columns

	const columns = [];

    // Loop to create the columns dynamically
    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        gridContainer.appendChild(column);
        columns.push(column);
    }

    projects.forEach((project, index) => {
		const column = columns[index % numberOfColumns]; 
        const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
        
        // Create image element
        const img = document.createElement("img"); 
        img.src = project.image; // Original image
        img.alt = project.title;
        img.loading = "lazy"; // Add lazy loading

		// Create hover image element
        const hoverImg = document.createElement("img");
        hoverImg.src = project.hoverImage; // Hover image
        hoverImg.alt = project.title + " (hover)";
        hoverImg.loading = "lazy"; // Add lazy loading
		hoverImg.classList.add("grid-item");
		hoverImg.classList.add("hoverimg");

		// Event listeners for hover effect
        gridItem.addEventListener('mouseover', () => {
			img.style.display = "none";
			hoverImg.style.display = "block";
        });

        gridItem.addEventListener('mouseout', () => {
            img.style.display = "block";
			hoverImg.style.display = "none";
        });

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        
        const overlayText = document.createElement("div");
        overlayText.classList.add("text");
        overlayText.innerText = project.title;
         

        // Append image, title, and tags to the grid item
        gridItem.appendChild(img);
		gridItem.appendChild(hoverImg);
        overlay.appendChild(overlayText);
        gridItem.appendChild(overlay);

        // Append grid item to the grid container
        column.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();


window.addEventListener('resize', createTiles);