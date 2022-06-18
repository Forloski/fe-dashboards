WORK IN PROGRESS DONT JUDGE ME

Components are divided in 5 levels, following atomic design (i hate their naming system so i changed it)

Base - Are the most basic components, 99% of the time they don't have state and come from MUI.
Group - Is a group of base components, most of they time they interact with one another and need states.
Block - Is a block of groups and base components that is used on a page and have some meaningful usage.
Template - Is most of the time a grouping of blocks to form the structure of our page.
Scenes - Is where the gaps in the template are filled with other components, most of the time blocks. (our page folders is actually our router to keep with Nextjs syntax)

This hierarchy is also used to control how we import components around too.

Scenes > Template > Block > Group > Base

Components can't import other components that are higher or at same level as himself. This is done to avoid circular dependencies and help out with keeping the codebase decoupled.
