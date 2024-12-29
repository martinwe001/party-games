import { Flex, Grid } from "@mantine/core";
import { JeopardyBox } from "../../Components/Jeopardy/JeopardyBox";
import { Category } from "../../types";

export type QuestionNumber = 1 | 2 | 3 | 4 | 5;

export function JeoparyCategory({ category }: { category: Category }) {
  return (
    <Flex w={"200px"}>
      <Grid gutter={"xs"} bg={"black"}>
        <Grid.Col>
          <JeopardyBox
            imageSrc="200.webp"
            question={category.name}
            isCategory={true}
          />
        </Grid.Col>
        {[1, 2, 3, 4, 5].map((cat) => (
          <Grid.Col key={cat}>
            <JeopardyBox
              imageSrc={`${2 * cat}00.webp`}
              question={category[`question${cat as QuestionNumber}`]}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
