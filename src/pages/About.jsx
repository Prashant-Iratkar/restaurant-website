import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:9.3,
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          mb:5
        },
        "& P":{
          textAlign:"justify",
          fontSize:18
        },
        "@media (max-width:600px)":{
          mt:0
        }
      }}>
        <Typography variant="h4">Welcome To My Resturent</Typography>
        <p style={{color:"black"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore
          sapiente iure tempora maiores, temporibus velit facere, quis pariatur
          cum, quos vitae dolores rem! Tempora aperiam et nihil adipisci ducimus
          vitae sapiente reprehenderit placeat facilis, iure itaque error
          mollitia odio cupiditate expedita distinctio, facere provident
          voluptate dignissimos officiis ipsa praesentium odit quasi. Veritatis
          sit nesciunt suscipit, fugit voluptatibus commodi quam iste eos
          nostrum fuga dolor fugiat quaerat repellendus facilis nihil numquam.
          Praesentium voluptas obcaecati reiciendis possimus quidem consequatur,
          tempora consequuntur perspiciatis doloribus corrupti at nihil atque
          repellendus quae voluptates eos exercitationem minima dignissimos
          accusamus ullam tenetur, sed, adipisci vero quia!
        </p>
        <br />
        <p style={{color:"black"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          voluptas, minus praesentium laudantium vitae ex voluptatum quibusdam
          impedit deleniti assumenda excepturi veniam iste repudiandae tenetur
          doloribus dolorum quisquam molestiae nulla tempora optio totam autem
          nisi ducimus. Ipsam tempore dolor consectetur laboriosam nesciunt,
          praesentium magnam unde facilis temporibus. Ratione delectus
          voluptatum vero aliquid, obcaecati eaque qui quos eveniet voluptas
          nulla fuga laudantium quibusdam ipsum assumenda id. Illo atque magni
          similique expedita numquam officia minima ipsa quasi aut molestiae.
          Quae quaerat cupiditate iusto deleniti ipsa esse, quos eum natus
          commodi incidunt harum quo? Alias nisi ut modi dolorum eaque qui magni
          fugiat?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
