class CariIP {
    public static void main(String[] args) {
        Mahasiswa Mahasiswa1 = new Mahasiswa();
        Mahasiswa1.hitungIpk(80, 40);
        Mahasiswa1.hitungIps(40, 20);
        System.out.println(Mahasiswa1.getIPK());
        System.out.println(Mahasiswa1.getIPS());
    }
}