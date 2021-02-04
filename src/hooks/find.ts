import { getBanner, getHomepage } from "@/api/find";
import { IBanner, IBlock } from "@/types/find";
import { onMounted, reactive, toRefs } from "vue";

export const useBanner = () => {
  const state = reactive({
    banners: [] as Array<IBanner>,
    headerColor: "red",
  });

  const bannerChange = (index: number): void => {
    state.headerColor = state.banners[index].titleColor;
  };

  onMounted(async () => {
    const { banners } = await getBanner();
    state.banners = banners;
  });

  return {
    ...toRefs(state),
    bannerChange,
  };
};

export const useBlock = () => {
  const state = reactive({
    blocks: [] as IBlock[],
  });

  onMounted(async () => {
    const { data } = await getHomepage();
    state.blocks = data.blocks;
  });

  return toRefs(state)
};
