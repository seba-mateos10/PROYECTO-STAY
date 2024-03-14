import { Skeleton, Stack } from "@mui/material";

export const CardSkeletonDetail = () => {
  return (
    <Stack sx={{ margin: "10%" }}>
      <Stack
        spacing={1}
        sx={{
          flexDirection: "row",
          border: "1px solid black",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        height={410}
        width={1215}
      >
        <Skeleton variant="rectangular" width={430} height={410} />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Skeleton
            variant="text"
            width={340}
            height={90}
            sx={{ marginTop: "1px" }}
          />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="text" width={700} height={90} />
          <Skeleton variant="text" width={250} height={30} />
          <Skeleton variant="text" width={190} height={110} />
        </Stack>
      </Stack>
    </Stack>
  );
};
