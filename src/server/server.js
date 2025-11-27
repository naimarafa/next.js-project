const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// temporary in-memory data
let artworks = [
  {
    id: "69103b709a86f183b931ef76",
    image: "https://i.ibb.co.com/0jHXTm4D/rainy-night.png",
    title: "Rainy Night",
    artist: {
      name: "Michael Tan",
      photo: "https://i.ibb.co.com/0jHXTm4D/rainy-night.png",
      email: "michael.tan@example.com"
    },
    category: "Urban",
    medium: "Acrylic on Canvas",
    description: "A vibrant depiction of skyscrapers reflected on rainy streets, symboli…",
    dimensions: "30x40 in",
    price: "$600",
    likes: 1
  },
  {
    id: "69103b709a86f183b931ef75",
    image: "https://i.ibb.co.com/jPLmGDnb/sunset.jpg",
    title: "Sunset Harmony",
    artist: {
      name: "Ariana Lopez",
      photo: "https://i.ibb.co.com/N6QN1ng4/nayeem-khan.jpg",
      email: "ariana.lopez@example.com"
    },
    category: "Landscape",
    medium: "Oil on Canvas",
    description: "A serene landscape capturing the golden hues of sunset blending with c…",
    dimensions: "24x36 in",
    price: "$450",
    likes: 5
  },
   {
    id: "69103b709a86f183b931ef77",
    image: "https://i.ibb.co.com/YFTZZHpR/forest-whispers.jpg",
    title: "Forest Whispers",
    artist: {
      name: "Lina Chowdhury",
      photo: "https://i.ibb.co.com/YFTZZHpR/forest-whispers.jpg",
      email: "lina.chowdhury@example.com"
    },
    category: "Nature",
    medium: "Watercolor",
    description: "Soft tones and fine brushwork evoke the mysterious calm of a misty for…",
    dimensions: "18x24 in",
    price: "$320",
    likes: 0
  },
  {
    id: "69103b709a86f183b931ef7b",
    image: "https://i.ibb.co.com/20PDGGWr/midnight-thought.jpg",
    title: "Midnight Thoughts",
    artist: {
      name: "Diana Russo",
      photo: "https://i.ibb.co.com/QFK9CbSH/alex-martin.jpg",
      email: "diana.russo@example.com"
    },
    category: "Abstract",
    medium: "Ink and Acrylic Mix",
    description: "A blend of deep blues and silvers reflecting the chaos and calm of sle…",
    dimensions: "36x36 in",
    price: "$550",
    likes: 1
  },  
  {
    id: "69103b709a86f183b931ef7c",
    image: "https://i.ibb.co.com/3mbSrJBh/europeana-Vsn-DYMWoll-M-unsplash.jpg",
    title: "Childhood Memory",
    artist: {
      name: "Noah Benson",
      photo: "https://i.ibb.co.com/3mbSrJBh/europeana-Vsn-DYMWoll-M-unsplash.jpg",
      email: "noah.benson@example.com"
    },
    category: "Realism",
    medium: "Oil on Linen",
    description: "Depicts a nostalgic village scene with children playing under mango tr…",
    dimensions: null,
    price: "$480",
    likes: 3
  },
  {
    id: "69103b709a86f183b931ef7a",
    image: "https://i.ibb.co.com/MDnRVDVr/Portrait-of-Silence.jpg",
    title: "Ceramic Blossom",
    artist: {
      name: "Rajiv Patel",
      photo: "https://i.ibb.co.com/MDnRVDVr/Portrait-of-Silence.jpg",
      email: "rajiv.patel@example.com"
    },
    category: "Sculpture",
    medium: "Ceramic and Glaze",
    description: "Handcrafted sculpture symbolizing renewal and growth through floral fo…",
    dimensions: "15x10x10 in",
    price: "$700",
    likes: 1
  },
];

// ✅ GET ALL
app.get("/blogs", (req, res) => {
  res.json(artworks);
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id; // get the id from URL
  const blog = artworks.find((item) => item.id === id); // find the matching blog

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog); // return the single blog
});


// ✅ POST
app.post("/blogs", (req, res) => {
  const newArtwork = {
    id: Date.now().toString(),
    ...req.body
  };

  artworks.push(newArtwork);
  res.json(newArtwork);
});


// ✅ DELETE
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  artworks = artworks.filter((item) => item.id !== id);

  res.json({ message: "Deleted", id });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(5000, () => console.log("Express server running on port 5000"));
