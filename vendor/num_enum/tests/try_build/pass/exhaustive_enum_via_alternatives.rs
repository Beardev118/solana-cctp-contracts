#[derive(num_enum::FromPrimitive)]
#[repr(u8)]
enum ExhaustiveFrom {
    #[num_enum(alternatives = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])]
    A = 0,
    #[num_enum(alternatives = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])]
    B = 16,
    #[num_enum(alternatives = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47])]
    C = 32,
    #[num_enum(alternatives = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63])]
    D = 48,
    #[num_enum(alternatives = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79])]
    E = 64,
    #[num_enum(alternatives = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95])]
    F = 80,
    #[num_enum(alternatives = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111])]
    G = 96,
    #[num_enum(alternatives = [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127])]
    H = 112,
    #[num_enum(alternatives = [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143])]
    I = 128,
    #[num_enum(alternatives = [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159])]
    J = 144,
    #[num_enum(alternatives = [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175])]
    K = 160,
    #[num_enum(alternatives = [177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191])]
    L = 176,
    #[num_enum(alternatives = [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207])]
    M = 192,
    #[num_enum(alternatives = [209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223])]
    N = 208,
    #[num_enum(alternatives = [225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239])]
    O = 224,
    #[num_enum(alternatives = [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255])]
    P = 240,
}

fn main() {

}
