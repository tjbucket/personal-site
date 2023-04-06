BEGIN TRANSACTION;

DROP TABLE IF EXISTS post_by_project, blog, project;

CREATE TABLE blog(
    post_id serial,
    post_date date,
    post_title varchar(50) NOT NULL,
    post_body varchar(8000) NOT NULL,
    CONSTRAINT pk_blog PRIMARY KEY (post_id)
);

CREATE TABLE project(
    project_id serial,
    project_title varchar(200) NOT NULL,
    project_status_id tinyint NOT NULL,
    project_description varchar(8000) NOT NULL,
    CONSTRAINT pk_project PRIMARY KEY (project_id)
    CONSTRAINT fk_status_id FOREIGN KEY (project_status_id) REFERENCES project_status(status_id)
);

CREATE TABLE project_status(
    status_id tinyint NOT NULL,
    status_name varchar(20) NOT NULL,
    CONSTRAINT pk_status PRIMARY KEY (status_id)
);

CREATE TABLE post_by_project(
    project_id int NOT NULL,
    post_id int NOT NULL,
    CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES project(project_id),
    CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES blog(post_id)
);

INSERT INTO project_status(status_id, status_name) VALUES (1,"In Progress"), (2, "Completed"), (3,"On Hold"), (4, "Dropped"), (5, "Planning");
INSERT INTO