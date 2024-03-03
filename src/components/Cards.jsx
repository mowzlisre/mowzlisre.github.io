import { motion } from "framer-motion";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { IoLogoAppleAr, IoSearch } from "react-icons/io5";
import { IoMdDocument } from "react-icons/io";

const cardWidth = {
    sm: (window.innerWidth*0.6),
    md: (window.innerWidth*0.5)+100,
    lg: (window.innerWidth*0.2)+100,
    xl: (window.innerWidth*0.3)+50
}

const CustomProjectCard = ({ title, subtitle, body, footer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const handleToggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Card ml={0} mr={"auto"}  px={3} py={4} width={cardWidth}>
            <Accordion allowMultiple>
                <AccordionItem border={"none"}>
                    <AccordionButton onClick={handleToggleAccordion}>
                        <Box as="span" flex='1' textAlign='left'>
                            <Text fontWeight={'bold'} fontSize={"xl"} color={'red'}>{title}</Text>
                            <Text fontStyle={'italic'} fontSize={'xs'} mt={2} lineHeight={4}>{subtitle}</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <motion.div
                        animate={{ height: isOpen ? "auto" : 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                        style={{ overflow: "hidden", width: "100%" }} // Set width to 100%
                    >
                        <AccordionPanel>
                            <Text fontSize={'sm'} lineHeight={5} textAlign={"justify"} mt={2}>
                                {body}
                            </Text>
                            {footer}
                        </AccordionPanel>
                    </motion.div>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}

const Neo4jVsMongoCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"NoSQL vs. Graph Database Comparison"}
                subtitle={"A qualitative and quantitative comparision of MongoDB and Neo4j"}
                body={"Our project entails a comprehensive evaluation of Neo4j and MongoDB's performance and capabilities using the extensive Spotify dataset, comprising 1.2 million songs. Through comparative analysis, we aim to assess their efficiency in data ingestion, preprocessing, and querying, focusing on their handling of diverse music attributes and large volumes of data. By meticulously analyzing execution times and query performance across various scenarios, we seek to provide valuable insights into the strengths and limitations of both databases for managing and querying music-related data. Ultimately, our findings aim to guide developers and analysts in selecting the optimal database solution for efficiently handling large-scale music datasets like Spotify's. This project's findings inspired the launch of Neoport, an open-source contribution project aimed at streamlining ETL for large-scale datasets."}
                footer={<Flex justifyContent={'end'} mt={5} gap={2}>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("https://github.com/mowzlisre/Neoport-Prototype", "_blank")} leftIcon={<IoMdDocument />}>
                        View Paper
                    </Button>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("https://github.com/mowzlisre/Neoport-Prototype", "_blank")} leftIcon={<IoLogoAppleAr />}>
                        View Prototype
                    </Button>
                </Flex>}
            />
        </Flex>
    );
}

const Neo4jCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"Neoport"}
                subtitle={"ETL tool to load csv data into Neo4j"}
                body={"Neoport is a powerful ETL (Extract, Transform, Load) tool tailored specifically for seamlessly importing CSV data into Neo4j databases. With Neoport, users can effortlessly extract data from CSV files, transform it as needed, and load it into their Neo4j database with intuitive mapping capabilities. Whether you're a data analyst, a developer, or a business user, Neoport simplifies the process of data integration, enabling you to efficiently manage and leverage CSV data within your Neo4j environment."}
                footer={<Flex justifyContent={'space-between'} mt={5}>
                    <Box my={"auto"}>
                        <Text fontSize={'xs'} fontStyle={"italic"}>* currently working on</Text>
                    </Box>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("https://github.com/mowzlisre/neoport", "_blank")} leftIcon={<FaCode />}>
                        Source Code
                    </Button>
                </Flex>}
            />
        </Flex>
    );
}

const FoodDesertCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"Food Desert Analysis"}
                subtitle={"An EDA on Prevelance of Food Desert in US"}
                body={"Our academic project seeks to deepen our understanding of the prevalence of food deserts in the United States using the Food Access Research Atlas Dataset provided by the Economic Research Service, U.S. Department of Agriculture. As a collaborative effort, our team conducted an exploratory data analysis on the food desert dataset. Through this analysis, we uncovered new insights into the correlation between poverty rates, monthly median income, and population. We have also devised innovative suggestions to address the challenges identified."}
                footer={<Flex justifyContent={'end'} mt={5}>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("https://github.com/Keerthana0620/DATS6101-Intro-to-DataScience-Project1", "_blank")} leftIcon={<IoSearch />}>
                        Explore
                    </Button>
                </Flex>}
            />
        </Flex>
    );
}

const NYCTaxiCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"Taxi Trip Duration Analysis"}
                subtitle={"An EDA on Ney York Taxi Trip Duration Dataset"}
                body={"Utilizing advanced machine learning algorithms and geospatial data analysis techniques, this project endeavors to build a robust prediction model for estimating the total duration of taxi trips in New York City. By incorporating factors such as traffic patterns, time of day, and geographic features, the aim is to develop a predictive system that can adapt to the dynamic nature of urban transportation. The ultimate objective is to provide taxi drivers, passengers, and transportation agencies with valuable insights and real-time predictions to optimize travel routes, reduce wait times, and enhance overall efficiency in the taxi service industry."}
                footer={<Flex justifyContent={'end'} mt={5}>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("https://github.com/shanunDS/NYC-Taxi-Trip-Duration", "_blank")} leftIcon={<IoSearch />}>
                        Explore
                    </Button>
                </Flex>}
            />
        </Flex>
    );
}

const GWUJoinCard = () => {
    return (
        <Card p={7} width={cardWidth}>
            <Text fontSize={'xs'} lineHeight={4} textAlign={'center'} color={'red'} fontStyle={"italic"}>Started <b>Master of Science in Data Science</b> from Fall 2023 at The George Washington University, Washington DC</Text>
        </Card>
    )
}

const AchaaryaTechCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"Achaarya Tech Startup"}
                subtitle={"Freelancing startup based on Chennai, India"}
                body={"During my tenure as the Founder and Project Lead Developer at Achaarya Tech, I spearheaded all facets of the business, from client acquisition to project management and client communication. This experience allowed me to refine my skills in financial management, client relationship building, and project management within the startup ecosystem. Over the span of two years, I successfully tailored, scaled, and deployed five projects for four clients, spanning areas such as Data Analytics, API Development, and Blockchain technology. Collaborating with a team of three developers, we effectively streamlined clients' business processes, enhanced user experiences, and established their online presence through custom portfolios and websites with SEO optimization. Through this experience, I gained invaluable insights into entrepreneurship, project execution, and client satisfaction, further fueling my passion for technology and innovation."}
                footer={""}
            />
        </Flex>
    )
}

const GCEGradCard = () => {
    return (
        <Card p={5} width={cardWidth}>
            <Text fontSize={'xs'} lineHeight={4} textAlign={'center'} color={'red'} fontStyle={"italic"}><b>Graduated with a Bachelor's Degree in Computer Science and Engineering</b> from Government College of Engineering, Bodinayakanur</Text>
        </Card>
    )
}

const SkillSafariCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"SkillSafari - Internship"}
                subtitle={"Full Stack Developer at Chennai, India"}
                body={"As an Intern Full Stack Developer at SkillSafari, I played a pivotal role in the evolution of the company's proprietary Learning Management System (LMS) during a 4-month tenure. My primary focus was on designing and implementing an intuitive user interface that enhanced user experience and facilitated seamless navigation for over 500 users. Concurrently, I spearheaded the establishment of a resilient backend infrastructure, leveraging my expertise in ReactJS for frontend development and Django along with Django Rest Framework for backend operations. This hands-on experience not only solidified my technical proficiency but also provided invaluable insights into effective project management and navigating the nuances of work culture, fostering a comprehensive understanding over a period of 12 months."}
                footer={""}
            />
        </Flex>
    )
}

const AFRCard = () => {
    return (
        <Flex>
            <CustomProjectCard
                title={"Attendance system using Face Recognition"}
                subtitle={"An OpenCV employed innovation to ease attendance marking system"}
                body={"The project involved the development of an Attendance System utilizing Face Recognition technology in Python, with the objective of optimizing conventional classroom attendance procedures. Employing the OpenCV library, the system achieves precise attendance tracking by accurately identifying student faces with an impressive 93% accuracy rate. Integration of a sophisticated Face Recognition module—utilizing face_recognition, deeplib, and OpenCV libraries—with a cloud-based application developed using Django REST API establishes a robust connection. Additionally, an intuitive user interface hosted on Amazon EC2 was designed to provide convenient access to attendance data for over 100 students, categorized by classes. This interface equips educators with comprehensive analytics, facilitating streamlined classroom management and data-driven decision-making."}
                footer={<Flex justifyContent={'end'} mt={5} gap={2}>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("", "_blank")} leftIcon={<IoMdDocument />}>
                        View Paper
                    </Button>
                    <Button size={'sm'} colorScheme={"red"} borderRadius={20} p={2} variant={"outline"} onClick={() => window.open("", "_blank")} leftIcon={<IoLogoAppleAr />}>
                        View Prototype
                    </Button>
                </Flex>}
            />
        </Flex>
    );
}

export { Neo4jCard, FoodDesertCard, Neo4jVsMongoCard, NYCTaxiCard, GWUJoinCard, GCEGradCard, AchaaryaTechCard, AFRCard, SkillSafariCard };
