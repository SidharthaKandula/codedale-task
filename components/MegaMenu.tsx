import PlatformMenu from "./PlatformMenu";
import SolutionsMenu from "./SolutionsMenu";
import IntegrationsMenu from "./IntegrationsMenu";
import CustomersMenu from "./CustomersMenu";
import ResourcesMenu from "./ResourcesMenu";

type MegaMenuProps = {
  activeMenu: string | null;
};

export default function MegaMenu({ activeMenu }: MegaMenuProps) {
  if (!activeMenu) return null;

  switch (activeMenu) {
    case "platform":
      return <PlatformMenu />;

    case "solutions":
      return <SolutionsMenu />;

    case "integrations":
      return <IntegrationsMenu />;

    case "customers":
      return <CustomersMenu />;

    case "resources":
      return <ResourcesMenu />;

    default:
      return null;
  }
}