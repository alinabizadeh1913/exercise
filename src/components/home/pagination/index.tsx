import { Component } from "react";
import Section from "../../layout/section";
import Typography from "../../layout/components/typography";
import First from "../../layout/components/first";
import Last from "../../layout/components/last";

interface PaginationProps {}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  items: Array<{
    id: number;
    title: string;
    text: string;
  }>;
}

class Pagination extends Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
      items: [
        {
          id: 1,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 2,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 3,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 4,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 5,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 6,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 7,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 8,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 9,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 10,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 11,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 12,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 13,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 14,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 15,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 16,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 17,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
        {
          id: 18,
          title: "Big Test Title",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim odit eligendi quisquam blanditiis fugiat eveniet natus nisi est.",
        },
      ],
    };
  }

  handleChangePage = (currentPage: number) => {
    this.setState({
      currentPage,
    });
  };

  handlePrevPage = () => {
    if (this.state.currentPage > 0) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  handleNextPage = () => {
    const totalPage = Math.ceil(
      this.state.items.length / this.state.itemsPerPage
    );
    if (this.state.currentPage < totalPage) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  render() {
    const { items, currentPage, itemsPerPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPage = Math.ceil(items.length / itemsPerPage);
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
      <Section container space="medium">
        <div className="flex justify-center">
          <div className="w-2/3">
            <div className="flex flex-col gap-y-4">
              <First>
                <Typography>Pagination</Typography>
              </First>
              <Last>
                <div className="flex flex-col">
                  <div className="w-full flex flex-wrap gap-y-4">
                    {currentItems.map((item) => (
                      <div className="w-1/2 px-2">
                        <div className="p-2 border border-white rounded-lg">
                          <div className="bg-[#474747] w-full h-[200px] rounded-lg flex justify-center items-center">
                            <div className="bg-white w-[55px] h-[55px] flex justify-center items-center rounded-full">
                              <Typography className="text-2xl" color="#000">
                                {item.id}
                              </Typography>
                            </div>
                          </div>
                          <div>
                            <Typography className="text-2xl my-3" tag="h3">
                              {item.title}
                            </Typography>
                            <Typography color="#9e9e9e" tag="p">
                              {item.text}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center gap-x-4 select-none">
                    <div
                      className={`prev cursor-pointer`}
                      onClick={() => this.handlePrevPage()}
                    >
                      <Typography>prev</Typography>
                    </div>
                    <div className="numbers flex gap-x-4">
                      {Array(totalPage)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            className={`number cursor-pointer`}
                            onClick={() => this.handleChangePage(index + 1)}
                          >
                            <Typography
                              className={
                                currentPage == index + 1 ? "underline" : ""
                              }
                              color={
                                currentPage == index + 1
                                  ? "white"
                                  : "rgba(255,255,255,0.5)"
                              }
                            >
                              {index + 1}
                            </Typography>
                          </div>
                        ))}
                    </div>
                    <div
                      className={`next cursor-pointer`}
                      onClick={() => this.handleNextPage()}
                    >
                      <Typography
                        className={currentPage == totalPage ? "opacity-50" : ""}
                      >
                        next
                      </Typography>
                    </div>
                  </div>
                </div>
              </Last>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Pagination;
