<?php
include ("header.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XYZ Project - Flat Blueprint</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .blueprint-container img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        .text-center {
            text-align: center;
        }
        .project-overview, .floor-plan-description, .contact-info {
            margin-top: 20px;
        }
        .interactive-blueprint .blueprint-map {
            position: relative;
        }
    </style>
</head>
<body>
    <div class="container pt-5">
        <!-- <h1>Flat Blueprint for XYZ Project</h1> -->
        <div class="blueprint-container">
            <img src="images/blueprint.jpg" alt="Flat Blueprint for XYZ Project" class="img-fluid">
            <!-- <p class="text-center">Blueprint of the XYZ Project showcasing the layout and design.</p> -->
        </div>
        <div class="project-overview p-3">
            <h2>Project Overview</h2>
            <p>Flat Project is located in the heart of the city, offering modern amenities and spacious living areas. The project includes multiple units with various layouts to suit different needs.</p>
            <ul>
                <li><strong>Location:</strong> Surjani Town Sector 4-D Near Green bus Depot </li>
                <li><strong>Size:</strong> 1500 sq. ft. per unit</li>
                <!-- <li><strong>Units Available:</strong> 2BHK, 3BHK, and 4BHK</li>h -->
            </ul>
        </div>
        <div class="floor-plan-description">
            <h2>Floor Plan Details</h2>
            <p>The blueprint highlights the following areas:</p>
            <ul>
                <li><strong>Living Room:</strong> 20x15 ft, with large windows and balcony access</li>
                <li><strong>Kitchen:</strong> 10x10 ft, modular setup with attached utility area</li>
                <li><strong>Master Bedroom:</strong> 15x12 ft, with ensuite bathroom and walk-in closet</li>
                <li><strong>Second Bedroom:</strong> 12x12 ft, with built-in wardrobes</li>
                <li><strong>Bathrooms:</strong> 2, with modern fittings and fixtures</li>
                <li><strong>Balcony:</strong> 8x5 ft, with space for outdoor seating</li>
            </ul>
        </div>
        <div class="interactive-blueprint">
            <h2>Interactive Blueprint</h2>
            <p>Hover over or click on different areas of the blueprint for more information.</p>
            <div class="blueprint-map">
                <img src="images/new 2.jpeg" usemap="#blueprint-map" class="img-fluid">
                <map name="blueprint-map">
                    <area shape="rect" coords="50,50,150,150" alt="Living Room" title="Living Room: 20x15 ft">
                    <area shape="rect" coords="160,50,260,150" alt="Kitchen" title="Kitchen: 10x10 ft">
                    <!-- Add more areas as needed -->
                </map>
            </div>
        </div>
        <div class="contact-info">
            <h2>Contact Us</h2>
            <p>For more information or to schedule a visit, please contact us:</p>
            <ul>
                <li><strong>Phone:</strong> 0315 2603737</li>
                <li><strong>Email:</strong> Al Sheikh@gmail.com</li>
                <li><strong>Address:</strong> Surjani Town Sector 4-D Near Green bus Depot </li>
            </ul>
        </div>
    </div>
</body>
</html>














<?php
include ("footer.php");
?>
