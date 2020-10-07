import OwnerDTO from "./OwnerDTO";

export default interface RepositoryDTO {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: OwnerDTO;
}
