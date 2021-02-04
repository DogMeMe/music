import { getPersonalized } from "@/api/self";
import { IRecommend } from "@/types/self";
import { onMounted, reactive, toRefs } from "vue";

export const useRecommend = async () => {
  const state = reactive({
    recommends: [] as Array<IRecommend>,
  });

  const { result } = await getPersonalized();
  for (let i = 1; i <= 6; i++) {
    const [luckyBody] = result.splice(
      Math.floor(Math.random() * result.length),
      1
    );
    state.recommends.push(luckyBody);
  }
  return {
    ...toRefs(state)
  };
};
