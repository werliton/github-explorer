import OwnerDTO from "./OwnerDTO";

export default interface IssuesDTO {
    id: number;
    title: string;
    html_url: string;
    owner: OwnerDTO
}
