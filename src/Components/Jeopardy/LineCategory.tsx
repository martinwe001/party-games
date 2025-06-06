import { Flex, Grid } from "@mantine/core";
import { Category } from "../../types";
import { LineBox } from "./LineBox";

export type QuestionNumber = 1 | 2 | 3 | 4 | 5;

export function LineCategory({ category }: { category: Category }) {
  return (
    <Flex w={"200px"}>
      <Grid gutter={"xs"} bg={"black"}>
        <Grid.Col>
          <LineBox
            imageSrc="200.webp"
            question={category.name}
            isCategory={true}
          />
        </Grid.Col>
        {[1, 2, 3, 4, 5].map((cat) => (
          <Grid.Col key={cat}>
            <LineBox
              imageSrc={`${2 * cat}00pink.webp`}
              question={category[`question${cat as QuestionNumber}`]}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
