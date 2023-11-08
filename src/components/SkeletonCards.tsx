import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  width: string;
  borderRadius: string;
}

const SkeletonCards = ({ width, borderRadius }: Props) => {
  return (
    <>
      <Card width={width} borderRadius={borderRadius} overflow="hidden">
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default SkeletonCards;
