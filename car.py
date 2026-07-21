import tkinter

# Screen dimensions
WIDTH, HEIGHT = 480, 720

# Background and car position
bg_y = 0
p1_x = int(WIDTH/2)
p1_y = int(HEIGHT/2)

# Road boundary (you can adjust based on bg image)
ROAD_LEFT = 160
ROAD_RIGHT = 320   # Add right boundary based on road width

def move(e):
    global p1_x, p1_y
    p1_x = int(0.8 * p1_x + 0.2 * e.x)
    p1_y = int(0.8 * p1_y + 0.2 * e.y)

    # --- BOUNDARY CHECKS ---
    if p1_x < ROAD_LEFT:
        p1_x = ROAD_LEFT
    if p1_x > ROAD_RIGHT:
        p1_x = ROAD_RIGHT
    if p1_y < 320:
        p1_y = 320
    if p1_y > HEIGHT - 40:  # bottom limit to avoid going below screen
        p1_y = HEIGHT - 40

def main():
    global bg_y
    bg_y = bg_y + 2
    if bg_y >= HEIGHT:
        bg_y = bg_y - HEIGHT

    cvs.delete('all')
    cvs.create_image(240, bg_y - 360, image=bg)
    cvs.create_image(240, bg_y + 360, image=bg)
    cvs.create_image(p1_x, p1_y, image=mycar)
    root.after(3, main)

# GUI setup
root = tkinter.Tk()
root.bind("<Motion>", move)
cvs = tkinter.Canvas(width=WIDTH, height=HEIGHT)
cvs.pack()

# Load images
bg = tkinter.PhotoImage(file="image/bg.png")
mycar = tkinter.PhotoImage(file="image/car_red.png")

main()
root.mainloop()
