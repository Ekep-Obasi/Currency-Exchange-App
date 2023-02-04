import {
  Box,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

function FAQpage() {
  return (
    <div>
      <Box padding={5}>
        <Box paddingY={2} gap={5}>
          <Typography variant="h1">FAQ</Typography>
          <Typography variant="h4">
            here are some Frequently asked Questions
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap={5}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              What are the benefits of currency conversion?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle">
                Moreover, currency converters help international import and
                export businesses by helping them determine the selling and
                buying profits of different products. Currency conversion is
                also useful for forex traders, offering the ability to track
                changes in exchange rate valuations in real time.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              What is the purpose of currency conversion?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle">
                Currency conversion can help you expand the reach of your
                products to more countries. This may be especially valuable to
                you if you sell and ship products to multiple countries, but
                your website does not have different product pages for each
                countrys currency
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Will currency exchange rates really have that much impact on me?
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores voluptatum impedit ad quae est cum provident, neque
                modi pariatur vel autem soluta perspiciatis, officia aliquam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              How do I know if I am getting a good exchange rate?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                doloribus veniam totam molestiae fuga ex ullam commodi
                repellendus laborum corporis vero, repudiandae omnis maxime.
                Officiis vitae ipsam quisquam nisi exercitationem soluta commodi
                dolor accusantium necessitatibus!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              How much does a currency exchange broker charge?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, doloribus vitae at in nemo id minus repellendus
                facere, consequatur optio delectus? Totam facilis, ducimus nulla
                excepturi, quae alias doloremque deleniti, eius corporis
                perspiciatis nihil fugiat ea? Vero hic voluptas iusto debitis
                recusandae consectetur voluptate expedita!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              How much does a currency exchange broker charge?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, doloribus vitae at in nemo id minus repellendus
                facere, consequatur optio delectus? Totam facilis, ducimus nulla
                excepturi, quae alias doloremque deleniti, eius corporis
                perspiciatis nihil fugiat ea? Vero hic voluptas iusto debitis
                recusandae consectetur voluptate expedita!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
}

export default FAQpage;
