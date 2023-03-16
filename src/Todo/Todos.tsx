import React from 'react';
import { Box, Button, Divider, Grid, GridItem, 
         Heading, IconButton, Text, 
         useColorModeValue 
} from '@chakra-ui/react';
import { CheckIcon, ArrowRightIcon } from "@chakra-ui/icons";
const Todos = () => {
    return(
        <>
            <Heading>
                Hi this is todos
            </Heading>
            <Grid
                p= "1em 2em" 
                display = "flex"
                justifyContent= "center"
                templateColumns = "repeat(12, 1fr)"
                gap={4}
            >
                <GridItem
                    colSpan={3}
                    width = "100%"
                >
                    <Box
                        p ="1em"
                        // bg = "cyan"
                        // color= "gray.700"
                        bg={useColorModeValue("teal.400", "teal")}
                        borderRadius= "lg"
                    >
                        <Heading
                            as= "h3"
                            size = "sm"
                            textAlign = "center"
                            textTransform= "uppercase"
                        >
                            Created Task
                        </Heading>
                        <Box
                            p = "1em"
                            mt = "1em"
                            overflow= "auto"
                            bg={useColorModeValue("white", "gray.700")}
                            borderRadius= "lg"
                            // color = "black"
                        >
                            <Heading
                                as = "h5"
                                size = "xs"
                            >
                                Task heading
                            </Heading>
                            <Text
                                color= {useColorModeValue("gray", "whiteAlpha.500")}
                            >
                                demo task
                            </Text>
                            <Divider />
                            <Text
                                fontSize= "sm"
                            >
                                Created At: DDMMYYYY HHMMSS
                            </Text>
                            <IconButton
                                mt = "0.5em" 
                                colorScheme= "red"
                                float = "right"
                                color = {useColorModeValue("white", "black")}
                                bg={useColorModeValue("red.400", "red.500")}
                                aria-label='task completed icon' 
                                icon={<ArrowRightIcon />
                            }
                            />
                        </Box>
                    </Box>
                </GridItem>
                <GridItem
                    width = "100%"                    
                    colSpan={3}
                >
                    <Box
                        p ="1em"
                        bg={useColorModeValue("red.400", "red.500")}
                        borderRadius= "lg"
                    >
                        <Heading
                            as= "h3"
                            size = "sm"
                            textAlign = "center"
                            textTransform= "uppercase"
                        >
                            Ongoing Task
                        </Heading>
                        <Box
                            p = "1em"
                            mt = "1em"
                            overflow= "auto"
                            bg={useColorModeValue("white", "gray.700")}
                            borderRadius= "lg"
                            // color = "black"
                        >
                            <Heading
                                as = "h5"
                                size = "xs"
                            >
                                Task heading
                            </Heading>
                            <Text
                                color= {useColorModeValue("gray", "whiteAlpha.500")}
                            >
                                demo task
                            </Text>
                            <Divider />
                            <Text
                                fontSize= "sm"
                            >
                                Created At: DDMMYYYY HHMMSS
                            </Text>
                            <IconButton
                                mt = "0.5em" 
                                float= "right"
                                colorScheme= "green"
                                aria-label='task completed icon' 
                                icon={<CheckIcon />}
                            />
                        </Box>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={3}
                    width = "100%"
                    >
                    <Box
                        p ="1em"
                        bg={useColorModeValue("green.500", "green.700")}
                        borderRadius= "lg"
                    >
                        <Heading
                            as= "h3"
                            size = "sm"
                            textAlign = "center"
                            textTransform= "uppercase"
                        >
                            Completed Task
                        </Heading>
                        <Box
                            p = "1em"
                            mt = "1em"
                            overflow= "auto"
                            bg={useColorModeValue("white", "gray.700")}
                            borderRadius= "lg"
                            // color = "black"
                        >
                            <Heading
                                as = "h5"
                                size = "xs"
                            >
                                Task heading
                            </Heading>
                            <Text
                                color= {useColorModeValue("gray", "whiteAlpha.500")}
                            >
                                demo task
                            </Text>
                            <Divider />
                            <Box>
                                <Text
                                    fontSize= "sm"
                                >
                                    Created At: DDMMYYYY HHMMSS
                                </Text>
                                <Button
                                    mt = "0.5em"
                                    colorScheme="green"
                                    float= "right"
                                    isDisabled
                                >
                                    Task Completed
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>
                
            </Grid>
        </>
    )
}

export default Todos;