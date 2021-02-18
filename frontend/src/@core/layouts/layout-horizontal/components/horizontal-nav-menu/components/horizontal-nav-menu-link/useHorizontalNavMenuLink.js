import { isNavLinkActive, navLinkProps } from "@core/layouts/utils";
import { ref }                           from "@vue/composition-api";


export default function useHorizontalNavMenuLink(item) {
  const isActive = ref(false)

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
